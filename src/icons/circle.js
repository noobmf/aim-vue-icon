
    export default function circle(options={}){
        if(options.origin){
            return '<svg  width="'+(options.size || 16) +'" height="'+(options.size || 16) +'"   fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 3a9 9 0 100 18 9 9 0 000-18zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12z" fill="#000"></path></svg>'
        }
        return '<svg xmlns="http://www.w3.org/2000/svg" width="'+ (options.size || 16) +'" height="'+ (options.size || 16) +'" viewBox="0 0 24 24" aria-hidden="true" fill="'+ (options.color || "currentColor") +'"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 3a9 9 0 100 18 9 9 0 000-18zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12z"></path></svg>'
    }
