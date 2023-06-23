import { Suspense, lazy } from "react";
import { Route } from "react-router-dom";

class ModuleRegister {
    private static instance: ModuleRegister;
    private modules: string[];
  
    private constructor() {
      this.modules = [];
    }
  
    public static getInstance(): ModuleRegister {
      if (!ModuleRegister.instance) {
        ModuleRegister.instance = new ModuleRegister();
      }
      return ModuleRegister.instance;
    }
  
    public includeModule(name: string): void {
      if (!this.modules.includes(name)) {
        this.modules.push(name);
      }
    }
  
    public excludeModule(name: string): void {
      const index = this.modules.indexOf(name);
      if (index !== -1) {
        this.modules.splice(index, 1);
      }
    }
  
    public renameModule(oldName: string, newName: string): void {
      const index = this.modules.indexOf(oldName);
      if (index !== -1) {
        this.modules[index] = newName;
      }
    }
  
    public printModules(): void {
      console.log(this.modules);
    }

    public getModulesRoutes(){
      return this.modules.map((fileName, index) => {
        const LazyComponent = lazy(() => import(`../Modules/${fileName}/${fileName}`));
        return (
          <Route
            key={index}
            path={`/${fileName.toLowerCase()}`}
            Component={() => (
              <Suspense fallback={<div>Loading...</div>}>
                <LazyComponent />
              </Suspense>
            )}
          />
        );
      })
    }
  }

  export default ModuleRegister;