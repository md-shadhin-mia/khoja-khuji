import { Component, ReactNode } from "react";
import ModuleRegister from "./RegisterModule";

class LoadModuleRouter extends Component{
    moduleRegister: ModuleRegister;
    constructor(props: any){
        super(props)
        this.moduleRegister = ModuleRegister.getInstance();
    }


    render(): ReactNode {
        return this.moduleRegister.getModulesRoutes()
    }
}

export default LoadModuleRouter;