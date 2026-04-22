#!/bin/bash

TEST_DIR="./tests"

echo -e "\n🚀 Starting automated test suite..."

# Uses find to feed the while loop
# -maxdepth 1: don't look in subfolders
# -name: only find the test files
find "$TEST_DIR" -maxdepth 1 -name "*.test.js" | while read -r test_file
do
  # Using basename makes the output look cleaner (removes the ./tests/ prefix)
  echo -e "\n\n🏃 Running: $(basename "$test_file")"
  node "$test_file"
done

echo -e "\n✨ All discovery and testing complete."
