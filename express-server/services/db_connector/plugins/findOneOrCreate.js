/**
 *
 * @param {Object} query - Condition to looking for Document
 * @param {Object} data - Value to create a new Document for corresponding Collection
 * @returns {Promise<data>}
 */
let findOneOrCreate = async function (query = {}, data = {}) {
  // Keep in mind: if you query by a document's _id but value you passed into is not as id format will make the bug.
  try {
    // 'this' now refers to the Model instance
    let docs = await this.findOne(query).exec();
    if (docs) {
      return docs;
    } else {
      return this.create(data);
    }
  } catch (error) {
    throw error;
  }
  
};

module.exports = (schema, options) => {
  /**
   * Add static "class" method to Model itself. (Model maybe is Users, Posts, etc)
   * Refer: https://stackoverflow.com/questions/39708841/what-is-the-use-of-mongoose-methods-and-statics
   * and: https://mongoosejs.com/docs/guide.html#statics
   * @param query
   */
  schema.statics.findOneOrCreate = findOneOrCreate;
};
