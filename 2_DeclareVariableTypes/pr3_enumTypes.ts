enum voltageSupplyStatus {
    Power_on,
    SleepMode,
    StandByMode,
    Power_off
}

let MyComputerStatus: voltageSupplyStatus = voltageSupplyStatus.Power_on;
console.log(MyComputerStatus);

let MyComputerStatus1: voltageSupplyStatus = voltageSupplyStatus.SleepMode;
console.log(MyComputerStatus1);

let MyComputerStatus2: voltageSupplyStatus = voltageSupplyStatus.StandByMode;
console.log(MyComputerStatus2);

let MyComputerStatus3: voltageSupplyStatus = voltageSupplyStatus.SleepMode;
console.log(MyComputerStatus3);