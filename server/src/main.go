package main

import (
	"GameServer/src/config"
	"GameServer/src/server"
	"github.com/rs/zerolog"
	"github.com/rs/zerolog/log"
	"gopkg.in/natefinch/lumberjack.v2"
	"path"
	"runtime"
)

func main() {
	//配置读取
	configDir := "./etc"
	if runtime.GOOS == "windows" {
		configDir = "./src/etc"
	}
	err := config.InitServerConfig(path.Join(configDir, "server.json"))
	if err != nil {
		log.Fatal()
	}
	err = config.InitGameConfig(path.Join(configDir, "game.json"))
	if err != nil {
		log.Fatal()
	}

	// 设置lumberjack日志滚动对象
	logger := &lumberjack.Logger{
		Filename:   path.Join(config.ServerCfg.LogPath, config.ServerCfg.LogFile), // 日志文件路径
		MaxSize:    200,                                                           // 最大文件大小（MB）
		MaxBackups: 10,                                                            // 最多保留旧文件的数量
		MaxAge:     30,                                                            // 最大文件保存天数
		Compress:   true,                                                          // 是否压缩/归档旧文件
	}
	zerolog.SetGlobalLevel(zerolog.Level(config.ServerCfg.LogLevel))
	log.Logger = zerolog.New(logger).With().Timestamp().Caller().Logger()

	svr := server.NewGameServer()
	svr.Run()
}
