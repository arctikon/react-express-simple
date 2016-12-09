var _ = require('lodash')
  , Promise = require('bluebird')
  , mongoose = require('mongoose')
  , Blog = require('./blog');


/**
 *
 * @param blogType
 * @param searchText
 * @param limitToActive
 * @returns {{type: *}}
 *
 */
function getBlogListQuery(blogType, searchText, limitToActive){
  var queryObj = {type: blogType};

  if(limitToActive && _.isEmpty(searchText)){
    queryObj = {
      $and: [
        {active: true},
        {type: blogType}
      ]
    };
  } else if(limitToActive && !_.isEmpty(searchText)){
    queryObj = {
      $and: [
        {active: true},
        {type: blogType},
        {$or: [
          {title: {$regex: searchText, $options: 'i'}},
          {content: {$regex: searchText, $options: 'i'}}
        ]}
      ]
    };
  }else if (!_.isEmpty(searchText)) {
    queryObj = {
      $and: [
        {type: blogType},
        {$or: [
          {title: {$regex: searchText, $options: 'i'}},
          {content: {$regex: searchText, $options: 'i'}}
        ]}
      ]
    };
  }

  return queryObj;
}

/**
 * Return number of documents matching the search parameters
 * @param {string} searchText - Text to match in title and content
 * @param {boolean} limitToActive - Only returns active documents (true) or all documents (false)
 */
module.exports.count = function count (blogType, searchText, limitToActive) {
  var queryObj = queryObj = getBlogListQuery(blogType, searchText, limitToActive);

  return Promise.resolve(
    Blog.count(queryObj)
      .exec(function (err, count) {
        if (err) {
          throw err;
        }
        return count;
      })
  );
};

/**
 *
 * @param intialDate
 * @param numPosts
 * @param direction
 */
module.exports.findAdjacent = function findAdjacent (blogType, intialDate, numPosts, direction){
  var queryObj = {}, sortObj = {};

  if (direction === 'ASC') {
    queryObj = {
      $and: [
        {"dateAdded": {"$gt":intialDate}},
        {"type": blogType},
        {"active": true}
      ]
    };
    sortObj["dateAdded"] = 1;
  } else {
    queryObj = {
      $and: [
        {"dateAdded": {"$lt":intialDate}},
        {"type": blogType},
        {"active": true}
      ]
    };
    sortObj["dateAdded"] = -1;
  }
  //console.log('findAdjacent queryObj ' + JSON.stringify(queryObj));
  return Promise.resolve(
    Blog.find(queryObj)
      .select({
        '_id': 1,
        'title': 1,
        'dateAdded': 1,
        'active': 1,
        'key': 1
      })
      .sort(sortObj)
      .limit(numPosts)
      .exec(function (err, blogs) {
        if (err) {
          throw err;
        }
        return blogs;
      })
  );
};

/**
 *
 * @param id
 * @returns {*|Object}
 */
module.exports.findById = function findById (id) {
  return Promise.resolve(
    Blog.findOne({'_id': mongoose.Types.ObjectId(id)}, function (err, blog) {
      if (err) {
        throw err;
      }
      return blog;
    })
  );
};

/**
 *
 * @param key
 */
module.exports.findByKey = function findByKey (blogKey) {

  return Promise.resolve(
    Blog.findOne({'key': blogKey}, function (err, blog) {
      if (err) {
        throw err;
      }
      return blog;
    })
  );
};

/**
 *
 * @param limit
 * @param offset
 * @param sortCol
 * @param sortDir
 * @param searchText
 * @param limitToActive
 */
module.exports.findPage = function findPage (blogType, limit, offset, sortCol, sortDir, searchText, limitToActive) {
  var queryObj = getBlogListQuery(blogType, searchText, limitToActive),
    sortObj = {};

  if (sortDir === 'ASC') {
    sortObj[sortCol] = 1;
  } else {
    sortObj[sortCol] = -1;
  }
  return Promise.resolve(
    Blog.find(queryObj)
      .select({
        '_id': 1,
        'title': 1,
        'dateAdded': 1,
        'active': 1,
        'key': 1
      })
      .sort(sortObj)
      .skip(offset)
      .limit(limit)
      .exec(function (err, blogs) {
        if (err) {
          throw err;
        }
        return blogs;
      })
  );
};

/**
 *
 * @param blog
 * @returns {*|Object}
 */
module.exports.save = function save (blog) {
  return Promise.resolve(
    blog.save(function (err, blog) {
      if (err) {
        throw err;
      }
      return blog;
    })
  );
};

