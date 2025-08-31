-- Fix the function search path security warning
CREATE OR REPLACE FUNCTION public.validate_business_owner()
RETURNS TRIGGER AS $$
BEGIN
  -- Ensure the owner_user_id matches the authenticated user
  IF NEW.owner_user_id != auth.uid() THEN
    RAISE EXCEPTION 'Users can only create businesses for themselves';
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;