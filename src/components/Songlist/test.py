class UserSignupSerializer(serializers.ModelSerializer):
    '''
    check the Uniqueness of the username
    encript the password by 'set_password' method
    '''
    username = serializers.CharField(max_length=100, required=True, allow_blank=False, error_messages={
        "blank": "Please enter your username",
        "required": "Please enter your username",
    }, validators=[UniqueValidator(queryset=User.objects.all(), message="Username already exits.")])

    password = serializers.CharField(required=True, style={'input_type': 'password'}, write_only=True)

    def create(self, validated_data):
        user = super(UserSignupSerializer, self).create(validated_data=validated_data)
        user.set_password(validated_data['password'])
        user.save()
        return user

