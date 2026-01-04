from .models import Comment
from django import forms
from allauth.account.forms import SignupForm


class CommentForm(forms.ModelForm):
    """
    Form to submit comments on individual blog posts.
    """
    class Meta:
        """
        Django model and order of the fields to be used in the form.
        """
        model = Comment
        fields = ('content',)


class CustomSignupForm(SignupForm):

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

        self.fields["password1"].help_text = ""
        self.fields["password2"].help_text = ""
