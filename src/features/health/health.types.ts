export type HealthStatus = 'ok' | 'error';

export interface DependencyHealth {
  status: HealthStatus;
  details?: string;
}

export interface HealthCheckResponse {
  status: HealthStatus;
  timestamp: string;
  dependencies: {
    database: DependencyHealth;
    redis: DependencyHealth;
    minio: DependencyHealth;
  };
}
