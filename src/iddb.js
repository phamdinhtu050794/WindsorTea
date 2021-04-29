const DB_NAME = 'inventorydb';
const DB_VERSION = 4;
let DB;

export default {

	async getDb() {
		return new Promise((resolve, reject) => {

			if(DB) { return resolve(DB); }
			
            // var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;
			let request = window.indexedDB.open(DB_NAME, DB_VERSION);
			
			request.onerror = e => {
				console.log('Error opening db', e);
				reject('Error');
			};
	
			request.onsuccess = e => {
				DB = e.target.result;
                console.log('OPENED DB', DB);
				resolve(DB);
			};
			
			request.onupgradeneeded = e => {
				console.log('onupgradeneeded');
				let db = e.target.result;
				db.createObjectStore("inventorys", { autoIncrement: true, keyPath:'id' });
			};
		});
	},
	async deleteInventory(inventory) {

		let db = await this.getDb();

		return new Promise(resolve => {

			let trans = db.transaction(['inventorys'],'readwrite');
			trans.oncomplete = () => {
				resolve();
			};

			let store = trans.objectStore('inventorys');
			store.delete(inventory.id);
		});	
	},
	async getInventorys() {

		let db = await this.getDb();

		return new Promise(resolve => {

			let trans = db.transaction(['inventorys'],'readonly');
			trans.oncomplete = () => {
				resolve(inventorys);
			};
			
			let store = trans.objectStore('inventorys');
			let inventorys = [];
			
			store.openCursor().onsuccess = e => {
				let cursor = e.target.result;
				if (cursor) {
					inventorys.push(cursor.value)
					cursor.continue();
				}
			};

		});
	},

	async saveInventory(inventory) {

		let db = await this.getDb();

		return new Promise(resolve => {

			let trans = db.transaction(['inventorys'],'readwrite');
			trans.oncomplete = () => {
				resolve();
			};

			let store = trans.objectStore('inventorys');
			store.put(inventory);

		});
	
	}

}