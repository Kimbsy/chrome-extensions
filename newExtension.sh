#------------------------------------------------------------------------------#
# Function to generate new chrome extension                                    #
#                                                                              #
# Add this function to ~/.bashrc and call from chrome-extensions directory     #
#                                                                              #
# Usage:                                                                       #
#   newExt ['<extension_name>'] ['<description>']                     #
#------------------------------------------------------------------------------#


new-ext() {
  # get name of new extension
  NAME=$1
  DESC=$2

  echo "Creating new chrome extension: '$NAME'"

  echo "Building directory hierachy..."

  # create directory hierarchy
  mkdir $NAME
  mkdir $NAME/js
  mkdir $NAME/css

  echo "Creating template files..."

  # create necessary files
  touch $NAME/manifest.json
  touch $NAME/js/$NAME.js
  touch $NAME/css/$NAME.css

  echo "Initialising files..."

  # copy jquery-2.1.1.js
  cp jquery-2.1.1.js $NAME/js/

  # put content in files
  # manifest file
  printf "{\n\t\"manifest_version\": 2,\n\t\"name\": \"$NAME\",\n\t\"description\": \"$DESC\",\n\n\t\"version\": \"1.0\",\n\n\t// You can add icon images if you want\n\t// \"icons\":\n\t// {\n\t// \t\"48\": \"$NAME-icon48.png\",\n\t// \t\"128\": \"$NAME-icon128.png\"\n\t// },\n\n\t\"content_scripts\": [\n\t\t{\n\t\t\"matches\": [\"<all_urls>\"],\n\t\t\"js\": [\"js/jquery-2.1.1.js\", \"js/$NAME.js\"],\n\t\t\"css\": [\"css/$NAME.css\"]\n\t\t}\n\t]\n}\n" > $NAME/manifest.json
  # js skeleton
  printf "/**\n * JavaScript file to be loaded into matched pages\n **/\n\$(document).ready(function() {\n\n});\n" > $NAME/js/$NAME.js
  # css file
  printf "/**\n * CSS file to be loaded into matched pages\n **/\n" > $NAME/css/$NAME.css

  echo "Extension created."

  # open in sublime
  subl $NAME/manifest.json $NAME/js/$NAME.js $NAME/css/$NAME.css
}
