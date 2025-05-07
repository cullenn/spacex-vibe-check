/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Launch = {
  __typename?: 'Launch';
  launch_date_utc?: Maybe<Scalars['String']['output']>;
  mission_name?: Maybe<Scalars['String']['output']>;
  rocket?: Maybe<Rocket>;
};

export type Query = {
  __typename?: 'Query';
  hello?: Maybe<Scalars['String']['output']>;
  launches?: Maybe<Array<Maybe<Launch>>>;
};

export type Rocket = {
  __typename?: 'Rocket';
  rocket_name?: Maybe<Scalars['String']['output']>;
  rocket_type?: Maybe<Scalars['String']['output']>;
};

export type GetLaunchesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLaunchesQuery = { __typename?: 'Query', launches?: Array<{ __typename?: 'Launch', launch_date_utc?: string | null, mission_name?: string | null, rocket?: { __typename?: 'Rocket', rocket_name?: string | null, rocket_type?: string | null } | null } | null> | null };


export const GetLaunchesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLaunches"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"launches"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"launch_date_utc"}},{"kind":"Field","name":{"kind":"Name","value":"mission_name"}},{"kind":"Field","name":{"kind":"Name","value":"rocket"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rocket_name"}},{"kind":"Field","name":{"kind":"Name","value":"rocket_type"}}]}}]}}]}}]} as unknown as DocumentNode<GetLaunchesQuery, GetLaunchesQueryVariables>;