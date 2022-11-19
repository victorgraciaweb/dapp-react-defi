const StellartToken = artifacts.require("StellartToken");

contract("StellartToken", accounts => {

    it("name", async () => {
        let instance = await StellartToken.deployed();

        let _name = await instance.name.call();
        assert.equal(_name, "Stellart Token");
    });

    it("symbol", async () => {
        let instance = await StellartToken.deployed();

        let _symbol = await instance.symbol.call();
        assert.equal(_symbol, "STE");
    });

    it("totalSupply", async () => {
        let instance = await StellartToken.deployed();

        let _totalSupply = await instance.totalSupply.call();
        assert.equal(_totalSupply, 1000000000000000000000000);
    });

    it("decimals", async () => {
        let instance = await StellartToken.deployed();

        let _decimals = await instance.decimals.call();
        assert.equal(_decimals, 18);
    });
})