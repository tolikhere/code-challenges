#!/bin/bash

# Creates a challenge file, an ai review file and a test file with the same filename.
# First choose a main folder then follow the instructions.
# Don't write extension like ".js" at the end of a file the program will do this automatically.
# Adds imports to test files.
# Adds an export boilerplate function to the challenge file.
# Adds a boilerplate for the ai review file

readonly YEAR="2026"
readonly MONTH="05"
# base folders
readonly BASE_PATH="js"
readonly TEST_PATH="tests"
readonly AI_REVIEW_PATH="ai-review"
full_path=""

MAIN_MENU() {
  if [[ -n $1 ]]
  then
    echo -e "\n$1"
  fi
  echo "1) codewars"
  echo "2) freecodecamp"
  echo "3) EXIT"

  read SELECTED_FOLDER

  case $SELECTED_FOLDER in
    1) HANDLE_FULL_PATH "codewars" ;;
    2) HANDLE_FULL_PATH "freecodecamp" ;;
    3) EXIT ;;
    *) MAIN_MENU "Please enter the displayed folder number." ;;
  esac
}

HANDLE_FULL_PATH() {
  full_path+="${BASE_PATH}/$1"
  if [[ $SELECTED_FOLDER == 1 ]]; then
    echo "Choose your kyu level:"
    HANDLE_CODEWARS_PATH
  fi
  full_path+="/${YEAR}/${MONTH}"

  CREATE_FILES
}

HANDLE_CODEWARS_PATH() {
  for (( i = 1; i <= 8; i++ )); do
    echo "$i) $i-kyu"
  done
  
  read KYU_LEVEL

  if [[ $KYU_LEVEL =~ ^[1-8]$ ]]; then
    full_path+="/${KYU_LEVEL}-kyu"
  else
    HANDLE_CODEWARS_PATH "Please enter the displayed kyu number."
  fi
}

CREATE_FILES() {
  echo -e "Please enter a file name without an extension:"
  read FILE_NAME

  if [[ -z $FILE_NAME ]]; then
    CREATE_FILE
  else
    CREATE_FOLDERS
    readonly FILE_PATH="./${full_path}/${FILE_NAME}.js"
    readonly TEST_FILE_PATH="./${TEST_PATH}/${full_path}/${FILE_NAME}.test.js"
    readonly AI_REVIEW_FILE_PATH="./${AI_REVIEW_PATH}/${full_path}/${FILE_NAME}.md"
    # creating files
    touch $FILE_PATH
    touch $TEST_FILE_PATH
    touch $AI_REVIEW_FILE_PATH
    ADD_TEMPLATE
  fi
}

CREATE_FOLDERS() {
  mkdir -p "./${full_path}"
  mkdir -p "./${TEST_PATH}/${full_path}"
  mkdir -p "./${AI_REVIEW_PATH}/${full_path}"
}

ADD_TEMPLATE() {
  echo -e "\nexport const ${FILE_NAME} = () => {\n\n};" >> $FILE_PATH
  # template for test files
  echo "import { ${FILE_NAME} } from \"#${full_path}/${FILE_NAME}.js\";" >> $TEST_FILE_PATH
  echo "import { assertEquals } from \"#utils/assertEquals.js\";" >> $TEST_FILE_PATH
  echo "import { logGroup } from \"#utils/logGroup.js\";" >> $TEST_FILE_PATH
  # template for ai review files
  echo -e "# 📝 Review: Challenge_Name" >> $AI_REVIEW_FILE_PATH
  echo -e "\n## ✨ What’s great about your solution:" >> $AI_REVIEW_FILE_PATH
  echo -e "\n## 🛠 Refactoring Tips:" >> $AI_REVIEW_FILE_PATH
  echo -e "\n### 💡 1. Tip_Name" >> $AI_REVIEW_FILE_PATH
  echo "---" >> $AI_REVIEW_FILE_PATH
  echo -e "\n## 🏆 Final Verdict" >> $AI_REVIEW_FILE_PATH
}

EXIT() {
  echo -e "\nHave a good day!\n"
  exit
}


MAIN_MENU "Please choose the folder to save the file:"
