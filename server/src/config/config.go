package config

import (
	"GameServer/msg"
	"encoding/json"
	"os"
)

type SyncMode int

var (
	ServerCfg *ServerConfig
	GameCfg   *msg.GameConfig
)

type ServerConfig struct {
	Ip   string `json:"ip"`
	Port int    `json:"port"`

	LogLevel int `json:"logLevel"`

	LogPath string `json:"logPath"`
	LogFile string `json:"logFile"`

	TimerMinMs int32 `json:"timerMinMs"`
}

func InitServerConfig(path string) error {
	data, err := os.ReadFile(path)
	if err != nil {
		return err
	}

	ServerCfg = &ServerConfig{}
	err = json.Unmarshal(data, ServerCfg)
	if err != nil {
		return err
	}
	return nil
}

func InitGameConfig(path string) error {
	data, err := os.ReadFile(path)
	if err != nil {
		return err
	}

	GameCfg = &msg.GameConfig{}
	err = json.Unmarshal(data, GameCfg)
	if err != nil {
		return err
	}
	return nil
}

func IsFrameSync() bool {
	return GameCfg.Mode == msg.SyncMode_SM_FRAME
}
