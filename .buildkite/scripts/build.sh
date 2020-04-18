npm run build
tar -cvzf $APP_NAME.tar.gz build
buildkite-agent artifact upload $APP_NAME.tar.gz