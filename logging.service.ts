// importing requirecd component
import {Injectable} from '@angular/core';
// decorator
@Injectable()
export class Loggingservice{
    // log method
    log(){
        console.log("Adding data");
    }
    // Information method
    info(){
        console.log("retrieving data");
    }
    // Warning method
    warn(){
        console.log("Deleted the given data");

    }
    //Clear method
    clear(){
        console.log("Cleared the field");
    }
}