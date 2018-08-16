set -e 
BASHO_VERSION=$(basho -v | basho 'x.split(".")[2]' -j 'parseInt(x) >= 43 && "OK"')

if [[ $BASHO_VERSION == "OK" ]]
then
  (
    echo scuttlespace-service-user-graphql-schema &&
    echo scuttlespace-service-user
  ) | basho -n proj -e 'cd ../${x} && npm link && [ -f npmlink.sh ] && ./npmlink.sh || echo skipped' \
      -l x -s proj -j '`updated ${x}`'
else
  echo "Install basho version 0.0.43 or higher."
fi