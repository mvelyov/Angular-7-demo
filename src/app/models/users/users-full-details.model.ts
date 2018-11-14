import { IPublicUserDetails } from './users-public-details.model';

export interface IUserFullDetails extends IPublicUserDetails {
  name: string;
  company: string;
  blog: string;
  location: string;
  email: string;
  hireable: boolean;
  bio: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}
