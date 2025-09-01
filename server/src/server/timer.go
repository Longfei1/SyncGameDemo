package server

import (
	"container/list"
	"sync/atomic"
	"time"
)

type TimerInfo struct {
	f        func()
	once     bool
	interval time.Duration
	leftTime time.Duration

	server *GameServer
	e      *list.Element
	remove atomic.Bool
}

func (t *TimerInfo) UnSchedule() {
	t.server.UnScheduleTimer(t)
}

func (t *TimerInfo) SetRemove() bool {
	if t.remove.CompareAndSwap(false, true) {
		return true
	}
	return false
}

func (t *TimerInfo) Clear() {
	t.f = nil
	t.once = false
	t.interval = 0
	t.leftTime = 0

	t.e = nil
	t.server = nil
	t.remove.Store(false)
}
