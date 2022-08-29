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
    'username': 'produdagramestdb',
    'password': 'produdagramestdb',
    'database': 'produdagramestdb',
    'aws_region': 'us-east-1',
    'aws_profile': 'default',
    'host': 'produdagramestdb.cxuwxqxkd8jb.us-east-1.rds.amazonaws.com',
    'dialect': 'postgres',
    'aws_media_bucket': 'udagram-estelle-s3-prod'
  }
};
