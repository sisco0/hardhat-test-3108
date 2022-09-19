import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Crash", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployCrashFixture() {
    const [owner, otherAccount] = await ethers.getSigners();
    const Crash = await ethers.getContractFactory("Crash");
    const crash = await Crash.deploy({ });

    return { crash, owner, otherAccount };
  }

  describe("Deployment", function () {
    it("Should deploy as expected and shift left", async function () {
      const { crash, owner } = await loadFixture(deployCrashFixture);
      for(let k = 0; k<1024; k++) {
        crash.connect(owner).f(k);
      }
    });
  });
});
