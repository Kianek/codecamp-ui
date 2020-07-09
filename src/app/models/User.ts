import Course from './Course';

export default class User {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  courses: Array<Course>;
}
