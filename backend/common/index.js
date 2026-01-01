
// db
const { connectDB, mongoose } = require('./db');

// aws / s3
const { s3Client, buildPublicUrl } = require('./s3');

// models
const { Video, videoSchema } = require('./models/video.model');

module.exports = {
  connectDB,
  mongoose,
  s3Client,
  buildPublicUrl,
  Video,
  videoSchema,
};
