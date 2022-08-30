export const config = {
  'dev': {
    'username': '',
    'password': '',
    'database': '',
    'host': '',
    'dialect': 'postgres',
    'aws_region': 'us-east-2',
    'aws_profile': 'default',
    'aws_media_bucket': 'udagram-ruttner-dev'
  },
  'jwt': {
    'secret': ' '
  },
  'prod': {
    'username': process.env.PROD_USERNAME,
    'password': process.env.PROD_PASSWORD,
    'database': process.env.PROD_DATABASE,
    'aws_region': 'us-east-1',
    'aws_profile': process.env.PROD_PROFILE,
    'host': process.env.PROD_HOST,
    'dialect': process.env.PROD_DIALECT,
    'aws_media_bucket': process.env.PROD_AWS_MEDIA_BUCKET
  }
};
