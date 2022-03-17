import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'postgres_jwt',
  connector: 'postgresql',
  url: '',
  host: '127.0.0.1',
  port: 5432,
  user: 'postgres',
  password: 'postgres',
  database: 'jwt'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class PostgresJwtDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'postgres_jwt';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.postgres_jwt', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
