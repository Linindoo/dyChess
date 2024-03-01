export default class Checkpoint {
    constructor() {
        this.clasli = tt.getStorageSync("clasli") || 0
    }

    /**
    * 进行游戏
    */
    playGame(num) {
        if (num) {
            this.clasli = num
        }
        play.init(4, com.clasli[this.clasli].map)
    }

    /**
    * 保存当前关卡数
    */
    saveLevelNum() {
		tt.setStorageSync("clasli", this.clasli)
    }

    /**
    * 进入下一关
    */
    increase() {
        this.clasli = this.clasli + 1
        this.saveLevelNum()
    }
}
