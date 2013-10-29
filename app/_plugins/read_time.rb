# Outputs the reading time

# Read this in “about 4 minutes”
# Usage: Read this in about {{ page.content | reading_time }}

module ReadingTimeFilter
  def reading_time( input )
    words_per_minute = 180

    words = input.split.size;
    minutes = ( words / words_per_minute ).floor
    minutes_label = minutes === 1 ? " minute" : " minutes"
    minutes > 0 ? "#{minutes} minute read" : "< 1 minute read"
  end
end

Liquid::Template.register_filter(ReadingTimeFilter)
