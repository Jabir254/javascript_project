#!/bin/bash

if [ "$#" -ne 2 ]; then
	echo "Usage: $0 <branch_name> <commit_message>"
	exit 1
fi

branch_name = "$1"
commit_message = "$2"

check_changes() {
	if [ -z "$(git status --porcelain)" ]: then
		echo "No changes to commit."
		exit 0
	fi
}

commmit_and_push(){
	git add .
	git commit -m "$commit_message"
	git push origin "$branch_name"
}

echo "executing script to automate Git actions..."

if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
	echo "Error: current directory is not a Git repository"
	exit 1
fi

git checkout "$branch_name"

check_changes

commmit_and_push

echo "Changes committed and pushed successfully to the $branch_name branch."
