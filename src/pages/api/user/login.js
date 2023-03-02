import ctrlUser from '../../../controllers/ctrlUser';
export default async function handler(req, res) {
  return new Promise((resolve) => {
    switch (req.method) {
      case 'POST':
        switch (req.query.path) {
          case 'SAVE_USER':
            return ctrlUser.SAVE_USER(req, res, resolve);
          case 'USUARIO_LOGIN':
            return ctrlUser.USUARIO_LOGIN(req, res, resolve);
        }
        break;
    }
    res.status(405).end();
    return resolve();
  });
}
