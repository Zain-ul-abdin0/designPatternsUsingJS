function UPS() {
  this.calculate = (package) => {
    return "123";
  };
}
function IPS() {
  this.calculate = (package) => {
    return "321";
  };
}
function FEDX() {
  this.calculate = (package) => {
    return "456";
  };
}

function Shipping() {
  this.company = "";
  this.setStrategy = (company) => {
    this.company = company;
  };
  this.calculate = (package) => {
    return this.company.calculate(package);
  };
}

const fedx = new FEDX();
const ups = new UPS();

const package = { from: "zain", to: "ahmad", weight: 32 };

const shipping = new Shipping();

shipping.setStrategy(fedx);
console.log("FEDX", shipping.calculate(package));

shipping.setStrategy(ups);
console.log("UPS", shipping.calculate(package));
