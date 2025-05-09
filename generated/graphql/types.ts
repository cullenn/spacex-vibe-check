import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
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
  launch_date_utc: Scalars['String']['output'];
  mission_name: Scalars['String']['output'];
  rocket?: Maybe<Rocket>;
  track?: Maybe<Track>;
};

export type Query = {
  __typename?: 'Query';
  hello?: Maybe<Scalars['String']['output']>;
  launches: Array<Launch>;
};

export type Rocket = {
  __typename?: 'Rocket';
  rocket_name?: Maybe<Scalars['String']['output']>;
  rocket_type?: Maybe<Scalars['String']['output']>;
};

export type Track = {
  __typename?: 'Track';
  artist?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type GetLaunchesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLaunchesQuery = { __typename?: 'Query', launches: Array<{ __typename?: 'Launch', launch_date_utc: string, mission_name: string, track?: { __typename?: 'Track', title?: string | null, artist?: string | null } | null }> };

export type GetLaunchTimesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLaunchTimesQuery = { __typename?: 'Query', launches: Array<{ __typename?: 'Launch', launch_date_utc: string }> };

export type GetLaunchesWithRocketsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLaunchesWithRocketsQuery = { __typename?: 'Query', launches: Array<{ __typename?: 'Launch', launch_date_utc: string, mission_name: string, rocket?: { __typename?: 'Rocket', rocket_name?: string | null, rocket_type?: string | null } | null }> };


export const GetLaunchesDocument = gql`
    query GetLaunches {
  launches {
    launch_date_utc
    mission_name
    track {
      title
      artist
    }
  }
}
    `;

/**
 * __useGetLaunchesQuery__
 *
 * To run a query within a React component, call `useGetLaunchesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLaunchesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLaunchesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetLaunchesQuery(baseOptions?: Apollo.QueryHookOptions<GetLaunchesQuery, GetLaunchesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLaunchesQuery, GetLaunchesQueryVariables>(GetLaunchesDocument, options);
      }
export function useGetLaunchesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLaunchesQuery, GetLaunchesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLaunchesQuery, GetLaunchesQueryVariables>(GetLaunchesDocument, options);
        }
export function useGetLaunchesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetLaunchesQuery, GetLaunchesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetLaunchesQuery, GetLaunchesQueryVariables>(GetLaunchesDocument, options);
        }
export type GetLaunchesQueryHookResult = ReturnType<typeof useGetLaunchesQuery>;
export type GetLaunchesLazyQueryHookResult = ReturnType<typeof useGetLaunchesLazyQuery>;
export type GetLaunchesSuspenseQueryHookResult = ReturnType<typeof useGetLaunchesSuspenseQuery>;
export type GetLaunchesQueryResult = Apollo.QueryResult<GetLaunchesQuery, GetLaunchesQueryVariables>;
export const GetLaunchTimesDocument = gql`
    query GetLaunchTimes {
  launches {
    launch_date_utc
  }
}
    `;

/**
 * __useGetLaunchTimesQuery__
 *
 * To run a query within a React component, call `useGetLaunchTimesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLaunchTimesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLaunchTimesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetLaunchTimesQuery(baseOptions?: Apollo.QueryHookOptions<GetLaunchTimesQuery, GetLaunchTimesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLaunchTimesQuery, GetLaunchTimesQueryVariables>(GetLaunchTimesDocument, options);
      }
export function useGetLaunchTimesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLaunchTimesQuery, GetLaunchTimesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLaunchTimesQuery, GetLaunchTimesQueryVariables>(GetLaunchTimesDocument, options);
        }
export function useGetLaunchTimesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetLaunchTimesQuery, GetLaunchTimesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetLaunchTimesQuery, GetLaunchTimesQueryVariables>(GetLaunchTimesDocument, options);
        }
export type GetLaunchTimesQueryHookResult = ReturnType<typeof useGetLaunchTimesQuery>;
export type GetLaunchTimesLazyQueryHookResult = ReturnType<typeof useGetLaunchTimesLazyQuery>;
export type GetLaunchTimesSuspenseQueryHookResult = ReturnType<typeof useGetLaunchTimesSuspenseQuery>;
export type GetLaunchTimesQueryResult = Apollo.QueryResult<GetLaunchTimesQuery, GetLaunchTimesQueryVariables>;
export const GetLaunchesWithRocketsDocument = gql`
    query GetLaunchesWithRockets {
  launches {
    launch_date_utc
    mission_name
    rocket {
      rocket_name
      rocket_type
    }
  }
}
    `;

/**
 * __useGetLaunchesWithRocketsQuery__
 *
 * To run a query within a React component, call `useGetLaunchesWithRocketsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLaunchesWithRocketsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLaunchesWithRocketsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetLaunchesWithRocketsQuery(baseOptions?: Apollo.QueryHookOptions<GetLaunchesWithRocketsQuery, GetLaunchesWithRocketsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLaunchesWithRocketsQuery, GetLaunchesWithRocketsQueryVariables>(GetLaunchesWithRocketsDocument, options);
      }
export function useGetLaunchesWithRocketsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLaunchesWithRocketsQuery, GetLaunchesWithRocketsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLaunchesWithRocketsQuery, GetLaunchesWithRocketsQueryVariables>(GetLaunchesWithRocketsDocument, options);
        }
export function useGetLaunchesWithRocketsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetLaunchesWithRocketsQuery, GetLaunchesWithRocketsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetLaunchesWithRocketsQuery, GetLaunchesWithRocketsQueryVariables>(GetLaunchesWithRocketsDocument, options);
        }
export type GetLaunchesWithRocketsQueryHookResult = ReturnType<typeof useGetLaunchesWithRocketsQuery>;
export type GetLaunchesWithRocketsLazyQueryHookResult = ReturnType<typeof useGetLaunchesWithRocketsLazyQuery>;
export type GetLaunchesWithRocketsSuspenseQueryHookResult = ReturnType<typeof useGetLaunchesWithRocketsSuspenseQuery>;
export type GetLaunchesWithRocketsQueryResult = Apollo.QueryResult<GetLaunchesWithRocketsQuery, GetLaunchesWithRocketsQueryVariables>;