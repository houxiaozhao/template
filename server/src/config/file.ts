import { join } from 'path';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';

export default {
  root: join(__dirname, '../uploads'),
  storage: diskStorage({
    destination: join(
      __dirname,
      `../uploads`,
    ),
    filename: (req, file, cb) => {
      const filename = `${uuidv4()}.${file.originalname.split('.').pop()}`;
      return cb(null, filename);
    },
  }),
};
