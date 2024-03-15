class EntityPersistence {
  constructor(storageKey) {
    this.storageKey = storageKey;
  }
  getNextId() {
    try {
      const entities = this._loadEntities();
      const keys = Array.from(entities.keys());
      const lastId = keys.length > 0 ? keys[keys.length - 1] : 0;
      return lastId + 1;
    } catch (error) {
      console.error(`Error generating next id: ${error}`);
      return false;
    }
  }

  save(entity) {
    try {
      if (entity.id === undefined || entity.id === null) {
        console.error('Entity id is undefined or null');
        return false;
      }
      this._saveEntity(entity);
      return entity;
    } catch (error) {
      console.error(`Error saving entity: ${error}`);
      return false;
    }
  }

  saveAll(entities) {
    try {
      if (Array.isArray(entities)) {
        entities.map((entity) => this.save(entity));
      }
    } catch (error) {
      console.error(`Error saving entities: ${error}`);
      return false;
    }
  }

  create(entity) {
    try {
      const createdEntity = entity;

      const nextId = this.getNextId();
      if (nextId) createdEntity.id = nextId;

      return this.save(entity);
    } catch (error) {
      console.error(`Error creating entity: ${error}`);
      return false;
    }
  }

  findAll() {
    try {
      return Array.from(this._loadEntities().values());
    } catch (error) {
      console.error(`Error retrieving ${this.storageKey} from localStorage:`, error);
      return [];
    }
  }

  findById(id) {
    try {
      let foundEntity = false;
      const entitiesMap = this._loadEntities();

      if (entitiesMap.has(id)) foundEntity = entitiesMap.get(id);

      return foundEntity;
    } catch (error) {
      console.error(`Error retrieving entity with the id: ${id} from localStorage:`, error);
      return false;
    }
  }

  delete(id) {
    try {
      const entities = this._loadEntities();

      if (entities.has(id)) {
        entities.delete(id);
        this._saveEntitiesToStorage(entities);
        return true;
      } else {
        console.error(`Entity with id ${id} not found for deletion`);
        return false;
      }
    } catch (error) {
      console.error(`Error deleting entity: ${error}`);
      return false;
    }
  }

  _saveEntity(entity) {
    try {
      const entities = this._loadEntitiesFromStorage();
      const id = typeof entity.id === 'string' ? entity.id.toLowerCase() : entity.id;
      entities.set(id, entity);
      this._saveEntitiesToStorage(entities);
      return true;
    } catch (error) {
      console.error('Error saving entity to localStorage', error);
      return false;
    }
  }

  _loadEntities() {
    try {
      return this._loadEntitiesFromStorage();
    } catch (error) {
      console.error(`Error loading ${this.storageKey} from localStorage`, error);
      return new Map();
    }
  }

  _loadEntitiesFromStorage() {
    const storedData = JSON.parse(localStorage.getItem(this.storageKey)) || [];
    return new Map(storedData);
  }

  _saveEntitiesToStorage(entities) {
    localStorage.setItem(this.storageKey, JSON.stringify([...entities]));
  }
}

export { EntityPersistence };
