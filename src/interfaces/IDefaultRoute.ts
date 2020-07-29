import React from 'react';

export declare interface IDefaultRoute {
  path: string;
  name: string;
  component: React.LazyExoticComponent<any>;
  exact?: boolean;
};
