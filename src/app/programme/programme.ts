export class Programme {
  name: string;
  courses: string[];
  constructor(num: number) {
    this.name = 'course' + num.toString();
    this.courses = ['very', 'hard', 'subjects'];
  }
}
