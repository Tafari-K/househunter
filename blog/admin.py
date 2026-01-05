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
    
    def has_add_permission(self, request):
        if request is None:
            return False
        return super().has_add_permission(request)
    
    def has_change_permission(self, request, obj=None):
        if request is None:
            return False
        return super().has_change_permission(request, obj)


admin.site.register(Comment)