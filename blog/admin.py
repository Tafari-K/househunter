from django.contrib import admin
from .models import Post, Comment
from django_summernote.admin import SummernoteModelAdmin


@admin.register(Post)
class PostAdmin(SummernoteModelAdmin):
    list_display = ('title', 'slug', 'author', 'status', 'created_on')
    list_display_links = ['title']
    search_fields = ['title', 'content']
    list_filter = ('status', 'created_on', 'author')
    prepopulated_fields = {'slug': ('title',)}
    summernote_fields = ('content',)
    
    def formfield_for_dbfield(self, db_field, request, **kwargs):
        # Fix for Summernote permission issue
        if request is None:
            return super().formfield_for_dbfield(db_field, None, **kwargs)
        return super().formfield_for_dbfield(db_field, request, **kwargs)


admin.site.register(Comment)