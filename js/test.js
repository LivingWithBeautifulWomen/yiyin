function init_sidebar_section() {
    $.get(ditto.sidebar_file, function (data) {
        var sidebarHtml = ''; // Initialize sidebar HTML

        // Split data into main sections and sub-sections
        var sections = data.split('### ');
        
        // Process main sections
        for (var i = 0; i < sections.length; i++) {
            var section = sections[i];
            if (section.trim() !== '') {
                var lines = section.split('\n');
                var sectionTitle = lines[0]; // Get section title
                var subSections = lines.slice(1); // Get sub-sections

                // Generate HTML for main section
                sidebarHtml += '<div><h2>' + sectionTitle + '</h2>';
                
                // Process sub-sections
                if (subSections.length > 0) {
                    sidebarHtml += '<ul>';
                    for (var j = 0; j < subSections.length; j++) {
                        var subSection = subSections[j];
                        if (subSection.trim() !== '') {
                            var parts = subSection.split('. '); // Split into index and title
                            var index = parts[0].trim();
                            var title = parts[1].trim();
                            sidebarHtml += '<li><a href="' + title.slice(title.indexOf('#')) + '">' + title + '</a></li>';
                        }
                    }
                    sidebarHtml += '</ul>';
                }
                
                sidebarHtml += '</div>';
            }
        }

        // Update sidebar with generated HTML
        $(ditto.sidebar_id).html(sidebarHtml);

        if (ditto.search_bar) {
            init_searchbar();
        }

        if (ditto.wwads) {
            init_wwads();
        }

        // You can keep the rest of the code unchanged

    }, "text").fail(function () {
        alert("Opps! can't find the sidebar file to display!");
    });
}
