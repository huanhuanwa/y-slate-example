import { Component } from '@angular/core';
import { createEditor} from 'slate';
import { withHistory } from 'slate-history';
import { withAngular } from 'slate-angular';
import randomColor from "randomcolor";
import faker from "faker";

interface User {
  id: string;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  users: User[];

  editor = withHistory(withAngular(createEditor()));

  user: User;

  isOnline; boolean;

  color: string;

  slug: string;

  isRemounted: boolean;

  ngOnInit(): void {
    this.slug = faker.lorem.slug(4);
    this.users = [this.createUser(), this.createUser()]
    this.color = randomColor({
      luminosity: "dark",
      format: "rgba",
      alpha: 1,
    });
  }

  remount() {
    this.isRemounted = true;
    setTimeout(() => {
      this.isRemounted = false;
    }, 10);
  }

  changeSlug(event) {
    this.slug = event.target.value;
    this.remount()
  }

  createUser() {
    return {
      id: faker.random.uuid(),
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    }
  }

  addUser() {
    this.users = [...this.users, this.createUser()]
  }

}