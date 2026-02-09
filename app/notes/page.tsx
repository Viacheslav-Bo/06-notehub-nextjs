// /notes – сторінка списку нотатків. На цій сторінці відображається перелік усіх
// створених нотаток. Реалізовано функцію пошуку за ключовим словом, а також можливість
// створення нової нотатки.

// /notes/[id] – сторінка деталей однієї нотатки (динамічний маршрут). На цій сторінці
// відображається повна інформація про одну нотатку за її id
import css from './NotesPage.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Notes',
  description: 'Notes desc',
};

export default function Notes() {
  return <h1>Hello</h1>;
}
