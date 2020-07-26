import Bookshelf from 'bookshelf';
import connection from './connection';

const bookshelf = Bookshelf(connection);
// bookshelf.plugin('pagination');

export default bookshelf;
