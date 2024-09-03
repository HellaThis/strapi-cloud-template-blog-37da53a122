#!/bin/bash

# Base API directory
BASE_DIR="./api"

# List of content types
declare -a CONTENT_TYPES=("article" "person" "event" "place" "organization" "product" "movie" "tvshow" "videogame" "aggregaterating" "review" "videoobject" "tv-episode" "offer" "audience")

# Function to create a standard Strapi file with some boilerplate content
create_file_with_content() {
  local file_path=$1
  local file_content=$2
  echo "$file_content" > "$file_path"
  echo "Created file: $file_path"
}

# Loop through each content type and create the necessary directories and files
for type in "${CONTENT_TYPES[@]}"; do
  # Create directories
  mkdir -p "${BASE_DIR}/${type}/content-types/${type}"
  mkdir -p "${BASE_DIR}/${type}/controllers"
  mkdir -p "${BASE_DIR}/${type}/routes"
  mkdir -p "${BASE_DIR}/${type}/services"

  echo "Created directories for: ${type}"

  # Determine the schema file name
  schema_file="${BASE_DIR}/${type}/content-types/${type}/schema.json"
#  if [ -f "$schema_file" ]; then
#    schema_file="${BASE_DIR}/${type}/content-types/${type}/schema-alt.json"
#  fi

  # Create the schema.json file
  touch "$schema_file"
  echo "Created file: $schema_file"

  # Create controller file
  controller_file="${BASE_DIR}/${type}/controllers/${type}.js"
  controller_content="'use strict';

/**
 * ${type} controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::${type}.${type}');
"
  create_file_with_content "$controller_file" "$controller_content"

  # Create route file
  route_file="${BASE_DIR}/${type}/routes/${type}.js"
  route_content="'use strict';

/**
 * ${type} router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::${type}.${type}');
"
  create_file_with_content "$route_file" "$route_content"

  # Create service file
  service_file="${BASE_DIR}/${type}/services/${type}.js"
  service_content="'use strict';

/**
 * ${type} service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::${type}.${type}');
"
  create_file_with_content "$service_file" "$service_content"

done

echo "All directories and files created successfully."
