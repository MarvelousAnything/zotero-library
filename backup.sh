#! /bin/sh
cd `dirname "$0"`
echo "EXECUTING BACKUP OF `pwd`"

DoBackupFlag=true

rm -f zotero.sqlite.part*
split -b 25m zotero.sqlite "zotero.sqlite.part"
Line=$(git status | tail -n 1)
if [ "$Line" = "nothing to commit, working tree clean" ]; then
	DoBackupFlag=false
fi;

if $DoBackupFlag; then
	git add .
	Pdfs=$(git status | grep -E "\.pdf$" | sed -E 's/\smodified(.*)/mod \1/' | sed -E 's/\snew(.*)/new \1/' | sed -E 's/\sdeleted(.*)/del \1/' | sed -E 's/([a-z]{3}).*\/([^\/]*.pdf)$/(\1) \2/')
	git commit -m "Daily backup" -m "$Pdfs"
	git push origin main
else
	echo " -> Nothing to backup (no changes since last backup)"
fi;
