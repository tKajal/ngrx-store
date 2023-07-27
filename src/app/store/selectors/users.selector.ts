import { createFeatureSelector } from '@ngrx/store';
import { Users } from '../models/users.model';
 
export const selectUsers = createFeatureSelector<Users[]>('usersList');