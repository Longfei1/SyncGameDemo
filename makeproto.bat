@echo off

::server
protoc --proto_path=./proto --go_out=./server/msg --go_opt=paths=source_relative ./proto/*.proto

::client
cd client
npx pbjs -t static-module -w commonjs -o ./assets/scripts/app/network/proto/proto.js ../proto/*.proto & npx pbts -o ./assets/scripts/app/network/proto/proto.d.ts ./assets/scripts/app/network/proto/proto.js
cd -