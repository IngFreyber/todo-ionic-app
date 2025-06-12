import { Storage } from '@ionic/storage-angular';

export function provideIonicStorage() {
  const storage = new Storage();
  const initPromise = storage.create();
  return [
    {
      provide: Storage,
      useValue: storage,
    },
  ];
}
