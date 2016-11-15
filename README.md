# response format

### install
>$ npm install --save ansi-regex

### Usage
>var  var response = new Response();

>response.format({code:'00000',message:'something',data:[]});

    {"code":"00000","data":[],"status":"success","message":"something","time":1479172147579}

>response.format({code:'10010',message:'something',data:[]});

    {"code":"10010","data":[],"status":"create failed","message":"something","time":1479172188430}

>response.format({code:'10020',message:'something',data:[]});

    {"code":"10020","data":[],"status":"insert  failed","message":"something","time":1479172199972}
        
>response.format({code:'10030',message:'something',data:[]});

    {"code":"10030","data":[],"status":"update  failed","message":"something","time":1479172385525}
    
>response.format({code:'10040',message:'something',data:[]});

    {"code":"10040","data":[],"status":"update  failed","message":"something","time":1479172385525}

>response.format({code:'10050',message:'something',data:[]});

    {"code":"10050","data":[],"status":"update  failed","message":"something","time":1479172385525}
    

>response.format({code:'99999',message:'something',data:[]});

    {"code":"99999","data":[],"status":"update  failed","message":"something","time":1479172385525}

### setting

>response.setCode('00000','ok');

>response.format({code:'00000',message:'something',data:[]});

    {"code":"00000","data":[],"status":"ok","message":"something","time":1479172676144}