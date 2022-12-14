export default {
    URL : 'http://localhost:3001',

    // POST 
    PostBranch : '/branch/createBranch',
    PostCreateMachine : '/machine/createMachine',
    PostCreateMoveMachine : '/move/createMoveMachine',
    PostcreatePercentage : '/percentage/createPercentage',
    PostcreatePourMoney : '/pour/createPourMoney',
    PostPourMoneyMachine : '/pourMachine/createPourMoneyMachine',
    PostInstalmanet : '/instalment/createInstalment',
    PostPrize : '/prize/createPrize',
    PostRegister : '/register/createRegister',
    PostUnit : '/unit/createUnit',
    PostUsers : '/user/createUser',
    PostWithDraw : '/withdraw/createWithDraw',
    PosthistoryUpdatePour : '/pourMoneyUpdate/createhistoryPourMoney',


    // GET 
    GetBranch : '/branch/getBranch',
    GetInstalmanet : '/Instalment/getInstalment',
    GetMachine : '/machine/getMachine',
    GetMoveMachine : '/move/getMoveMachine',
    GetPercentage : '/percentage/getPercentage',
    GetPourMoney : '/pour/getPourMoney',
    GetPrize : '/prize/getPrizeInfo',
    GetRegister : '/Register/getRegister',
    GetUnit : '/unit/getunit',
    GetUsers : '/user/getUser',
    GetWithDraw : '/withdraw/getWithDraw',
    GethistoryUpdatePour : '/pourMoneyUpdate/getdatahistoryPour',


    // PUT 
    PutBranch : '/branch/updateBranch/',
    PutInstalmanet : '/Instalment/updateInstalment/',
    PutMachine : '/machine/updateMachine/',
    PutMoveMachine : '/move/updateMove/',
    PutPercentage : '/percentage/updatePercentage/',
    PutPourMoney : '/pour/updatePourMoney/',
    PutPrize : 'prize/updatePrize/',
    PutRegister : '/register/updateregister/',
    PutUnit : '/unit/updateUnit/',
    PutUsers : '/user/updateUser/',
    PutWithDraw : '/withDraw/updateWithDraw/',
    PuthistoryUpdatePour : '/pourMoneyUpdate/updatePourHistory/',



    // Delete 
    DeBranch : '/branch/DeleteBranch/',
    DeInstalmanet : '/Instalment/DeleteInstalment/',
    DeMachine : '/machine/DeleteMachine/',
    DeMoveMachine : '/move/DeleteMove/',
    DePercentage : '/percentage/DeletePercentage/',
    DePourMoney : '/Pour/DeletePourMoney/',
    DePrize : '/prize/DeletePrize/',
    DeRegister : '/register/DeleteRegister/',
    DeUnit : '/unit/DeleteUnit/',
    DeUsers : '/user/DeleteUser/',
    DeWithDraw : '/withdraw/DeleteWithDraw/',
    DehistoryUpdatePour : '/pourMoneyUpdate/deletePourhistory/',



    // GetUID 
    UIDBranch : '/branch/getByIdBranch/',
    UIDInstalmanet : '/Instalment/getByInstalment/',
    UIDMachine : '/Machine/GetByIdMachine/',
    UIDMoveMachine : '/move/MoveById/',
    UIDPercentage : '/percentage/getPercenTageById/',
    UIDPourMoney : '/Pour/GetByIdPourMoney/',
    UIDPrize : '/Prize/GetByIdPrize/',
    UIDRegister : '/register/GetByIdRegister/',
    UIDUnit : '/unit/GetUnitById/',
    UIDUsers : '/user/getById/',
    UIDWithDraw : ' /WithDraw/WithDrawById/',
    UIDhistoryUpdatePour : '/pourMoneyUpdate/deletePourhistory/',
    UIDhistoryGETPourUID : '/pourMoneyUpdate/getByPourId/',

    getRegisterByIdMachineId : '/register/getRegisterByIdMachineId/',
    getregisterByIdUnitId : '/register/getregisterByIdUnitId/',
    getPourMoneyByUnitId : '/Pour/getPourMoneyByUnitId/',



    // GetName 
    UGNInstalmanet : '/Instalment/getByIdInstalment/',
    UGNMachine : '/Machine/getByNumMachine/',
    UGNMoveMachine : '/move/getmoveBy/',
    UGNPourMoney : '/pour/findPourMoney/',
    UGNUsers : '',
    UGNWithDraw : '',
    UGNhistoryUpdatePour : '/pourMoneyUpdate/getByPourId/',

    

    // Login 
    Login : '/user/login',
    Profile: '/user/GetUserProfile',

    StatusMachine: '/machine/GetMachineStatus'
}

