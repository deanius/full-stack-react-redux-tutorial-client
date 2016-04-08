#!/bin/sh

npm run test
if [ "$?" != "0" ]; then
  echo "Tests failed"
  exit 1
fi

npm run lint
if [ "$?" != "0" ]; then
  echo "Lint errors"
  exit 1
fi

npm run test:e2e
if [ "$?" != "0" ]; then
  echo "Integration test errors"
  exit 1
fi

exit 0

